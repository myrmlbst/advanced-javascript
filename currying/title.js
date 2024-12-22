// in a React.js project:

const withTitle = (Component, title) => {
    /*
    higher order function returns a new, enhanced component
    that renders the original component with the given title
    */
    return props => <Component {...props} title={title} />;
}

// curried function that adds the title 'hello' to a component
const withHelloTitle = withTitle("Hello");

// curried function that adds the title "goodbye" to a component
const withGoodbyeTitle = withTitle("Goodbye");