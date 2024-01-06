import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  кабинет: DS.attr('number'),
  этаж: DS.attr('number'),
  организация: DS.belongsTo('i-i-s-kandidaty-na-rabotu-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-kandidaty-na-rabotu-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-kandidaty-na-rabotu-планир-собес', {
    датаПланСобес: attr('Дата планирования собеседования', { index: 0 }),
    кабинет: attr('Номер кабинета проведения собеседования', { index: 1 }),
    этаж: attr('Этаж', { index: 2 }),
    время: attr('Время собеседования', { index: 3 }),
    регистАнкеты: belongsTo('i-i-s-kandidaty-na-rabotu-регист-анкеты', 'ФИО кандидата', {
      фИОКандид: attr('ФИО кандидата', { index: 5, hidden: true }),
      вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', '', {
        должность: attr('Вакантная должность', { index: 6 })
      }, { index: -1, hidden: true }),
      номерТелефона: attr('Номер телефона кандидата', { index: 8 }),
      элПочта: attr('Электронная почта', { index: 9 }),
      организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', '', {
        адрес: attr('Адрес организации', { index: 12 }),
        телОрганиз: attr('Телефон организации', { index: 13 })
      }, { index: -1, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОКандид' }),
    иметьПриСебе: attr('Иметь при себе', { index: 7 }),
    организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-kandidaty-na-rabotu-планир-собес', {
    датаПланСобес: attr('Дата планирования собеседования', { index: 0 }),
    время: attr('Время собеседования', { index: 1 }),
    кабинет: attr('Номер кабинета проведения собеседования', { index: 2 }),
    этаж: attr('Этаж', { index: 3 }),
    регистАнкеты: belongsTo('i-i-s-kandidaty-na-rabotu-регист-анкеты', 'ФИО кандидата', {
      фИОКандид: attr('ФИО кандидата', { index: 4 }),
      вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', '', {
        должность: attr('Вакантная должность', { index: 5 })
      }, { index: -1, hidden: true }),
      номерТелефона: attr('Номер телефона кандидата', { index: 7 }),
      элПочта: attr('Электронная почта', { index: 8 }),
      организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', '', {
        адрес: attr('Адрес организации', { index: 10 }),
        телОрганиз: attr('Телефон организации', { index: 11 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    иметьПриСебе: attr('Иметь при себе', { index: 6 }),
    организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
