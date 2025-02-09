import js from "@eslint/js";

export default [

    // apply recommended rules to JS files
    // {
    //     name: "blockvilla-vite/recommended-rules",
    //     files: ["**/*.js"],
    //     rules: js.configs.recommended.rules
    // },

    // // apply recommended rules to JS files with an override
    // {
    //     name: "blockvilla-vite/recommended-rules-with-override",
    //     files: ["**/*.js"],
    //     rules: {
    //         ...js.configs.recommended.rules,
    //         "no-unused-vars": "off"
    //     } 
    // },

    // apply all rules to JS files
    {
        name: "blockvilla-vite/all-rules",
        files: ["**/*.js"],
        rules: {
            ...js.configs.all.rules,
            "no-unused-vars": "off"
        } 
    }
]