module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  "globals": {
    // runtime entities
    "process": true,
    "module": true,
    "window": true,
    // external libraries
    "$": true,
  },
  "parser": "babel-eslint",
  "rules": {
    /* Errors */
    // belong's extended rules
    "newline-before-return": "error",
    "newline-after-var": "error",

    /* Ignored */
    // Not following
    "max-len": "off", // WHY:: not practical
    "react/no-multi-comp": "off", // WHY:: not practical
    "react/no-danger": "off", // WHY:: not practical
    "no-bitwise": "off", // WHY:: not practical
    "arrow-parens": "off", // WHY:: not a consistent syntax
    "react/jsx-filename-extension": "off", // WHY:: not particular about file extensions
    "class-methods-use-this": "off", // WHY:: Inconvinience -> static methods usage -> this.constructor.menthod instead of this.method
    "import/prefer-default-export": "off", // WHY:: sometimes its better to only have "* as" style imports than a default import
    // LongTerm - pending fixes to these rules
    "jsx-a11y/no-static-element-interactions": "off", // TODO:: accessibility - use <a href> instead of <div>
    "jsx-a11y/img-has-alt": "off", // TODO:: accessibility - all <img should have alt or role="presentation"
    "jsx-a11y/label-has-for": "off", // TODO:: accessibility - all non-implicit labels should have for
    "jsx-a11y/href-no-hash": "off", // TODO:: accessibility - instead of <a href="#" /> use <button />
    "jsx-a11y/tabindex-no-positive": "off", // TODO:: accessibility - shouldnt use +ve tabindices as it affects natural flow
    "jsx-a11y/heading-has-content": "off", // TODO:: accessibility - shouldnt have empty headings <h1/>
    // ShortTerm - pending fixes to these rules
    "react/forbid-prop-types": "off", // TODO:: (PropTypes.object -> PropTypes.shape), (PropTypes.array -> PropTypes.arrayOf())
    "no-useless-escape": "off", // TODO:: Regex cleanup
    "react/no-unescaped-entities": "off", // TODO:: use html entities for special charecters
    "react/jsx-no-target-blank": "off", // TODO: add rel="noopener noreferrer"
    "react/no-string-refs": "off", // TODO: use callback refs to refer to DOM node
    "react/no-find-dom-node": "off", // TODO: use callback refs to refer to DOM node
    "react/require-default-props": "off", // TODO: mention defaulProps to non 'isRequired' props.
    "no-plusplus": "off", // TODO:: instead of i++ use i += 1;
    "react/self-closing-comp": "off", // TODO:: instead of <Component></Component> use <Component />
    "no-mixed-operators": "off", // TODO:: should not mix BinaryExpressions and LogicalExpressions
    "react/no-array-index-key": "off", // TODO:: should use unique key not array indices in jsx loops
    "import/no-extraneous-dependencies": ["off", { "devDependencies": ["**/*.test.js", "**/*.spec.js"], }], // TODO:: fix eslint config - false positives
    "react/no-unused-prop-types": "off", // too many false positives
  },
  "ecmaFeatures": {
    "jsx": true,
  },
};
