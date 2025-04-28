// Exportaciones básicas de componentes UI
// Aquí se exportarán todos los componentes de la librería UI

// Ejemplo de un componente Button básico
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

// Placeholder para futura implementación de componentes reales
export const uiComponents = {
  version: '0.0.1',
  ready: true,
};
