import React from 'react';
import useResetNavigation from '@hooks/useResetNavigation';

function InjectHOC<Props, F>(WrappedComponent: React.FC<Props & F>, slices: F) {
  const {navigateWithReset} = useResetNavigation();
  const ComponentWithExtraInfo = (props: Props) => {
    return (
      <WrappedComponent
        {...props}
        {...slices}
        navigateWithReset={navigateWithReset}
      />
    );
  };
  return ComponentWithExtraInfo;
}

export default InjectHOC;
