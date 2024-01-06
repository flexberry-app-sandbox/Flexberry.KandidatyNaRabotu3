import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  кандидОтклон: DS.attr('boolean'),
  приглНаРаб: DS.attr('boolean'),
  организация: DS.belongsTo('i-i-s-kandidaty-na-rabotu-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-kandidaty-na-rabotu-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-kandidaty-na-rabotu-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кандидОтклон: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-рег-результ.validations.кандидОтклон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приглНаРаб: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-рег-результ.validations.приглНаРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-kandidaty-na-rabotu-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов собеседования', { index: 0 }),
    планирСобес: belongsTo('i-i-s-kandidaty-na-rabotu-планир-собес', 'Дата планирования собеседования', {
      иметьПриСебе: attr('Дата планирования собеседования', { index: 2, hidden: true }),
      регистАнкеты: belongsTo('i-i-s-kandidaty-na-rabotu-регист-анкеты', '', {
        фИОКандид: attr('ФИО кандидата', { index: 3 }),
        вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', '', {
          должность: attr('Вакантная должность', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'датаПланСобес' }),
    организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    приглНаРаб: attr('Приглашен на работу', { index: 7 }),
    кандидОтклон: attr('Кандидатура отклонена', { index: 8 }),
    тЧРегРезульт: hasMany('i-i-s-kandidaty-na-rabotu-т-ч-рег-результ', 'Регистрация результатов собеседования', {
      сотрудники: belongsTo('i-i-s-kandidaty-na-rabotu-сотрудники', 'ФИО сотрудника', {
        фИОСотр: attr('ФИО сотрудника', { index: 1, hidden: true }),
        должность: attr('Должность', { index: 2 })
      }, { index: 0, displayMemberPath: 'фИОСотр' }),
      оценкаКандид: attr('Оценка кандидата', { index: 3 }),
      итогСобесед: attr('Итог собеседования', { index: 4 }),
      крКомИлиОбсРеш: attr('Краткий комментарий или обоснованное решение', { index: 5 })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-kandidaty-na-rabotu-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов собеседования', { index: 0 }),
    планирСобес: belongsTo('i-i-s-kandidaty-na-rabotu-планир-собес', 'Дата планирования собеседования', {
      иметьПриСебе: attr('Дата планирования собеседования', { index: 1 }),
      регистАнкеты: belongsTo('i-i-s-kandidaty-na-rabotu-регист-анкеты', '', {
        фИОКандид: attr('ФИО кандидата', { index: 2 }),
        вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', '', {
          должность: attr('Вакантная должность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 4 })
    }, { index: -1, hidden: true }),
    приглНаРаб: attr('Приглашен на работу', { index: 5 }),
    кандидОтклон: attr('Кандидатура отклонена', { index: 6 })
  });
};
