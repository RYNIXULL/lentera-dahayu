"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { SceneFallback } from "./scene-fallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class SceneErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Light Engine 3D Scene safely caught error:", error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return <SceneFallback />;
    }
    return this.props.children;
  }
}
