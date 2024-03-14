import React from 'react';

interface Props {
  fallback: React.ReactNode;
}
export default class ErrorBoundary extends React.PureComponent<Props> {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }
  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
