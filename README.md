# swagger-ui-clickable-links

A Swagger UI plugin that automatically makes URLs in descriptions and examples clickable.

## Features

- Automatically detects URLs in API descriptions, response examples, and documentation
- Makes URLs clickable with proper `target="_blank"` and security attributes
- Seamlessly integrates with existing Swagger UI installations
- Supports TypeScript with full type definitions

## Installation

```bash
npm install swagger-ui-clickable-links
```

## Usage

### With Swagger UI Bundle

```javascript
import SwaggerUI from 'swagger-ui';
import ClickableLinksPlugin from 'swagger-ui-clickable-links';

SwaggerUI({
  dom_id: '#swagger-ui',
  url: 'https://petstore.swagger.io/v2/swagger.json',
  plugins: [SwaggerUI.plugins.DownloadUrl, ClickableLinksPlugin],
});
```

### With CDN

```html
<script src="https://unpkg.com/swagger-ui-dist@5.10.0/swagger-ui-bundle.js"></script>
<script src="https://unpkg.com/swagger-ui-clickable-links@1.0.0/dist/index.umd.js"></script>

<script>
  SwaggerUIBundle({
    dom_id: '#swagger-ui',
    url: 'https://petstore.swagger.io/v2/swagger.json',
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      SwaggerUIClickableLinksPlugin.default,
    ],
  });
</script>
```

## Example

Check the `example/` directory for a complete working example.

## License

GPL-3.0
