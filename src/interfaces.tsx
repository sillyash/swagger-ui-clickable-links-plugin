import React from 'react';

// Type for the Original component
type OriginalComponent = React.ComponentType<any>;

// Type for the system object
interface SwaggerUISystem {
  React: typeof React;
  getComponents: () => Record<string, React.ComponentType<any>>;
  getSelectors: () => Record<string, Function>;
  getActions: () => Record<string, Function>;
  getConfigs: () => Record<string, any>;
  authSelectors: Record<string, Function>;
  authActions: Record<string, Function>;
  specSelectors: Record<string, Function>;
  specActions: Record<string, Function>;
  errSelectors: Record<string, Function>;
  errActions: Record<string, Function>;
  fn: Record<string, Function>;
  layoutSelectors: Record<string, Function>;
  layoutActions: Record<string, Function>;
}

// Type for the wrapper function
type ComponentWrapper = (
  Original: OriginalComponent,
  system: SwaggerUISystem
) => React.ComponentType<any>;

// Type for the plugin
interface SwaggerUIPlugin {
  wrapComponents?: Record<string, ComponentWrapper>;
  components?: Record<string, React.ComponentType<any>>;
  statePlugins?: Record<string, any>;
}

export type { OriginalComponent, SwaggerUISystem, SwaggerUIPlugin };