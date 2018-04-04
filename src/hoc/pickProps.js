import { mapProps } from "recompose"
import pick from "lodash.pick"

const pickProps = validProps => mapProps(props => pick(props, validProps))

export default pickProps
