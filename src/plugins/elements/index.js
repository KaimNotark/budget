import Vue from "vue";

// switch from chinese to english
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "element-ui/packages/theme-chalk/lib/index.css";

// import components from framework
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Alert
} from "element-ui";

// объеденим все компоненты в один массив
const elements = [Button, Card, Form, FormItem, Input, Select, Option, Alert];
// подключаем англ. яз.
locale.use(lang);
// делаем каждый компонет глобальным
elements.forEach((El) => Vue.use(El, { locale }));
