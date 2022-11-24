import './index.css'

const Options = props => {
  const {capital} = props
  const {capitalDisplayText, id} = capital

  return <option value={id}>{capitalDisplayText}</option>
}
export default Options
