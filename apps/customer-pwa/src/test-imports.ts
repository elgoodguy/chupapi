// Test file to verify local package imports
import { apiClient } from '@super-app/api-client';
import type { ExampleType } from '@super-app/types';

// Simple test to verify imports work
console.log('API Client:', apiClient);

// Usando el tipo en una variable tipada
const example: ExampleType = 'example';
console.log('Example Type variable:', example);
