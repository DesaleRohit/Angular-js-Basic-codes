angular.module('myApp', [])

  .component('appHeader', {
    template: `
      <header>
        <h2>This is Header</h2>
        <nav>
          <a href="index.html">Home</a> |
          <a href="new.html">Next Page</a>
        </nav>
      </header>
    `
  })

  .component('appMain', {
    template: `
      <main>
        <p>This is new.html file</p>
        <p></p>
      </main>
    `
  })

  .component('appFooter', {
    template: `
      <footer>
        <h2>This is Footer</h2>
      </footer>
    `,
  });
