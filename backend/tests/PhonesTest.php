<?php


namespace App\Tests;


use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use ApiPlatform\Core\Exception\InvalidArgumentException;
use App\Entity\Phone;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;
use Symfony\Component\HttpFoundation\Request;

class PhonesTest extends ApiTestCase
{
    // This trait provided by HautelookAliceBundle will take care of refreshing the database content to a known state before each test
    use RefreshDatabaseTrait;

    public function testGetCollection(): void
    {
        // The client implements Symfony HttpClient's `HttpClientInterface`, and the response `ResponseInterface`
        $response = static::createClient()->request(Request::METHOD_GET, '/api/phones');

        $this->assertResponseIsSuccessful();
        // Asserts that the returned content type is JSON-LD (the default)
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');

        // Asserts that the returned JSON is a superset of this one
        $this->assertJsonContains([
            '@context' => '/api/contexts/Phone',
            '@id' => '/api/phones',
            '@type' => 'hydra:Collection',
            'hydra:totalItems' => 100,
            'hydra:view' => [
                '@id' => '/api/phones?page=1',
                '@type' => 'hydra:PartialCollectionView',
                'hydra:first' => '/api/phones?page=1',
                'hydra:last' => '/api/phones?page=4',
                'hydra:next' => '/api/phones?page=2',
            ],
        ]);

        // Because test fixtures are automatically loaded between each test, you can assert on them
        $this->assertCount(30, $response->toArray()['hydra:member']);

        // Asserts that the returned JSON is validated by the JSON Schema generated for this resource by API Platform
        $this->assertMatchesResourceCollectionJsonSchema(Phone::class);
    }

    public function testCreatePhone(): void
    {
        $response = static::createClient()->request(Request::METHOD_POST, '/api/phones', ['json' => [
            'name' => 'iPhone X',
            'manufacturer' => 'Apple Inc.',
            'description' => 'The iPhone X was Apple\'s flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor',
            'color' => 'Black',
            'price' => 699.99,
            'imageFileName' => 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg',
            'screen' => '5.8\'\'',
            'processor' => 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
            'ram' => 3
        ]]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        $this->assertJsonContains([
            '@context' => '/api/contexts/Phone',
            '@type' => 'Phone',
            'name' => 'iPhone X',
            'manufacturer' => 'Apple Inc.',
            'description' => 'The iPhone X was Apple\'s flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor',
            'color' => 'Black',
            'price' => 699.99,
            'imageFileName' => 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg',
            'screen' => '5.8\'\'',
            'processor' => 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
            'ram' => 3
        ]);
        $this->assertRegExp('~^/api/phones/\d+$~', $response->toArray()['@id']);
        $this->assertMatchesResourceItemJsonSchema(Phone::class);
    }

    public function testCreateInvalidPhone(): void
    {
        static::createClient()->request(Request::METHOD_POST, '/api/phones', ['json' => [
            'price' => 288.2,
        ]]);

        $this->assertResponseStatusCodeSame(422);
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');

        $this->assertJsonContains([
            '@context' => '/api/contexts/ConstraintViolationList',
            '@type' => 'ConstraintViolationList',
            'hydra:title' => 'An error occurred',
            'hydra:description' => 'name: This value should not be null.
manufacturer: This value should not be blank.
description: This value should not be blank.
color: This value should not be blank.
imageFileName: This value should not be blank.
screen: This value should not be blank.
processor: This value should not be blank.
ram: This value should not be blank.',
        ]);
    }

    public function testUpdatePhone(): void
    {
        $client = static::createClient();
        // findIriBy allows to retrieve the IRI of an item by searching for some of its properties
        // Being sure that the phone exists by the unique processor number it is possible to assert on them
        $iri = $this->findIriBy(Phone::class, ['processor' => '9782310154215']);

        $client->request(Request::METHOD_PUT, $iri, ['json' => [
            'name' => 'updated title'
        ]]);

        $this->assertResponseIsSuccessful();
        $this->assertJsonContains([
            '@id' => $iri,
            'name' => 'updated title',
            'processor' => '9782310154215',
        ]);
    }
    public function testDeletePhone(): void
    {
        $client = static::createClient();
        $iri = $this->findIriBy(Phone::class, ['processor' => '9782310154215']);

        $client->request(Request::METHOD_DELETE, $iri);

        $this->assertResponseStatusCodeSame(204);
        $this->assertNull(
        // Through the container, you can access all your services from the tests, including the ORM, the mailer, remote API clients...
            static::$container->get('doctrine')->getRepository(Phone::class)->findOneBy(['processor' => '9781344037075'])
        );
    }

}