import React, { Component, lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';

function LazyImport(Component) {
  const ComponentLoadable = lazy(() => Component)
  return props => (
    <LazyLoad height={200} offset={400} once>
      <Suspense fallback={<div />}>
        <ComponentLoadable {...props} />
      </Suspense>
    </LazyLoad>
  );
}

const Nav = LazyImport(import('./image'));

export default class App extends Component {
  render() {

    return (
      <div className="App">
        {[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6].map(() => <Nav />)}
      </div>
    );
  }
}
