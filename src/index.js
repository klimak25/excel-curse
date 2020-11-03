import {Excel} from '@/components/excel/Excel';
import './scss/index.scss'
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Taible} from '@/components/taible/Taible';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Taible]
})

excel.render()
