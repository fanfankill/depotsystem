// 导入自己需要的组件
import Vue from 'vue'
import { 
  //login
  Input,
  Button,
  Checkbox,
  Link,
  Message,
  MessageBox,
  Loading,
  //main
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,



  //mainshow
  skeleton,
  skeletonItem,
  divider,

  //parking
  Option,
  select,
  Switch,
  tag,
  button,
  table,


} from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Checkbox)
    Vue.use(Input)
    Vue.use(Link)
    Vue.use(Message)
    Vue.use(MessageBox)

    //main
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Footer)
    Vue.use(Main)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(skeletonItem)

    Vue.use(skeleton)
    Vue.use(divider)

      //parking
      Vue.use(Option)
      Vue.use(select)
      Vue.use(Switch)
      Vue.use(tag)
      Vue.use(button)
      Vue.use(table)
  }
}

export default element