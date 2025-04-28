// Exportaciones de todos los componentes UI

// Componentes básicos
export * from './ui/button';
export * from './ui/input';
export * from './ui/card';
export * from './ui/dialog';
export * from './ui/toast';
export * from './ui/dropdown-menu';
export * from './ui/avatar';
export * from './ui/badge';
export * from './ui/chip';

// Utilidades
export * from '../lib/utils';

// Información de la biblioteca
export const uiComponents = {
  version: '0.1.0',
  ready: true,
  theme: {
    dark: '#070707',
    light: '#FFFFFF',
    accent: '#F07167'
  }
};
