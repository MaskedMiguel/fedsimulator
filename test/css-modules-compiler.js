import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import hook from "css-modules-require-hook"
import sass from "node-sass"
import path from "path"
require("string.prototype.includes")

configure({ adapter: new Adapter(), })

hook({
  extensions: [".scss",],
  preprocessCss: function(css, filepath) {
    const result = sass.renderSync({
      data: css,
      includePaths: [path.resolve(filepath, ".."),],
    })
    return result.css
  },
})
