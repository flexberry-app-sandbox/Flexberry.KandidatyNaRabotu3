import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧГрафСобес: DS.hasMany('i-i-s-kandidaty-na-rabotu-т-ч-граф-собес', { inverse: 'графСобес', async: false })
});

export let ValidationRules = {
  тЧГрафСобес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-граф-собес.validations.тЧГрафСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафСобесE', 'i-i-s-kandidaty-na-rabotu-граф-собес', {
    тЧГрафСобес: hasMany('i-i-s-kandidaty-na-rabotu-т-ч-граф-собес', 'График собеседований кандидатов', {
      планирСобес: belongsTo('i-i-s-kandidaty-na-rabotu-планир-собес', 'Дата планирования собеседования', {
        иметьПриСебе: attr('Дата планирования собеседования', { index: 1, hidden: true }),
        время: attr('Время собеседования', { index: 2 }),
        кабинет: attr('Номер кабинета проведения собеседования', { index: 3 }),
        этаж: attr('Этаж', { index: 4 }),
        регистАнкеты: belongsTo('i-i-s-kandidaty-na-rabotu-регист-анкеты', '', {
          фИОКандид: attr('ФИО кандидата', { index: 5 }),
          вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', '', {
            должность: attr('Вакантная должность', { index: 6 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'датаПланСобес' })
    })
  });

  modelClass.defineProjection('ГрафСобесL', 'i-i-s-kandidaty-na-rabotu-граф-собес', {
    
  });
};
