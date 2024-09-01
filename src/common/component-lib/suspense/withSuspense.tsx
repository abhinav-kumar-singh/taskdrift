import { Suspense } from "react";

interface IWithSuspense {
  suspenseFallback?: JSX.Element;
}

function withSuspense<T>(
  WrappedComponent: React.ComponentType<T & IWithSuspense>
): (props: T & IWithSuspense) => JSX.Element {
  const ComponentWithSuspense = (props: T & IWithSuspense): JSX.Element => {
    const { suspenseFallback } = props;

    return (
      <Suspense fallback={suspenseFallback || <></>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  ComponentWithSuspense.defaultProps = {
    suspenseFallback: <></>,
  };
  return ComponentWithSuspense;
}

export default withSuspense;
