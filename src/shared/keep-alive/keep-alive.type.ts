// / <reference types="react" />
import React from 'react';

export interface KeepAliveProps {
  name: string;
  children: React.ReactElement;
  timeout?: number;
  onLoad?: () => void;
  triggerEvent?: 'onChange' | 'onSubmit';
  onCacheHitted?: (params: Record<'pagination' | 'searchs', any>) => void;
}
