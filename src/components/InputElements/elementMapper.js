import Checkbox from './Checkbox'
import CheckboxEdit from './CheckboxEdit'
import Col from './Col'
import Divider from './Divider'
import Row from './Row'
import Radio from './Radio'
import RadioEdit from './RadioEdit'
import Select from './Select'
import SelectEdit from './SelectEdit'
import SectionTitle from './SectionTitle'
import SectionTitleEdit from './SectionTitleEdit'
import Text from './Text'
import TextEdit from './TextEdit'
import TextBox from './TextBox'
import TextBoxEdit from './TextBoxEdit'

const elements = {
  checkbox: Checkbox,
  col: Col,
  date: Text,
  email: Text,
  divider: Divider,
  row: Row,
  radio: Radio,
  select: Select,
  sectionTitle: SectionTitle,
  text: Text,
  textBox: TextBox,

  edit: {
    checkbox: CheckboxEdit,
    col: Col,
    date: TextEdit,
    email: TextEdit,
    divider: Divider,
    row: Row,
    radio: RadioEdit,
    select: SelectEdit,
    sectionTitle: SectionTitleEdit,
    text: TextEdit,
    textBox: TextBoxEdit,
  },
}

export default elements
