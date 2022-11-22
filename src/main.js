import Vue from 'vue'
import App from './App.vue'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  DatePicker,
  Form,
  FormItem,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Cascader,
  Container,
  Aside,
  Link,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification,
  Divider,
} from 'element-ui';
import router from './router/index'
import store from './store/index';

Vue.config.productionTip = false
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Cascader);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Link);
Vue.use(CascaderPanel);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
import {DropMenu,DropMenuItem,Navbar} from 'wot-design'
Vue.use(DropMenu)
Vue.use(DropMenuItem);
Vue.use(Navbar);
new Vue({
  render: h => h(App),
  router:router,
  store,
}).$mount('#app')
