# swagger-ui-clickable-links

A Swagger UI plugin that automatically makes URLs in descriptions and examples clickable.

## Features

- Detects URLs in API responses and examples.
- Makes URLs clickable with proper `target="_blank"` and security attributes.
- Works with both JSON and plain text responses.
- Seamlessly integrates with existing Swagger UI installations.

## Usage

### With CDN

```html
<script src="https://unpkg.com/swagger-ui-dist@5.10.0/swagger-ui-bundle.js"></script>
<script src="https://unpkg.com/swagger-ui-clickable-links/"></script>

<script>
  SwaggerUIBundle({
    dom_id: '#swagger-ui',
    url: 'https://petstore.swagger.io/v2/swagger.json',
    plugins: [ SwaggerUIClickableLinks ],
  });
</script>
```

### With npm

```bash
npm install swagger-ui-clickable-links
```

```javascript
import SwaggerUI from 'swagger-ui';
import SwaggerUIClickableLinks from 'swagger-ui-clickable-links';

SwaggerUI({
  dom_id: '#swagger-ui',
  url: 'https://petstore.swagger.io/v2/swagger.json',
  plugins: [ SwaggerUIClickableLinks ],
});
```

## Example

Check the `example/` directory for a complete working example.

---

## License

GPL-3.0 - see [LICENSE](LICENSE) for details.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.
