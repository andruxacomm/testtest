'use strict';

import polyfills from './libraries/polyfills';
import about from '../../components/about/about'

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    about();
});
