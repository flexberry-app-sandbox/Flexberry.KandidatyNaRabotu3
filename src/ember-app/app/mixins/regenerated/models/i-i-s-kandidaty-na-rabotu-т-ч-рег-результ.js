import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  итогСобесед: DS.attr('i-i-s-kandidaty-na-rabotu-итог-собесед'),
  крКомИлиОбсРеш: DS.attr('string'),
  оценкаКандид: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-kandidaty-na-rabotu-сотрудники', { inverse: null, async: false }),
  регРезульт: DS.belongsTo('i-i-s-kandidaty-na-rabotu-рег-результ', { inverse: 'тЧРегРезульт', async: false })
});

export let ValidationRules = {
  итогСобесед: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-рег-результ.validations.итогСобесед.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  крКомИлиОбсРеш: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-рег-результ.validations.крКомИлиОбсРеш.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оценкаКандид: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-рег-результ.validations.оценкаКандид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-рег-результ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регРезульт: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-рег-результ.validations.регРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегРезультE', 'i-i-s-kandidaty-na-rabotu-т-ч-рег-результ', {
    сотрудники: belongsTo('i-i-s-kandidaty-na-rabotu-сотрудники', 'ФИО сотрудника', {
      фИОСотр: attr('ФИО сотрудника', { index: 1, hidden: true }),
      должность: attr('Должность', { index: 2 })
    }, { index: 0, displayMemberPath: 'фИОСотр' }),
    оценкаКандид: attr('Оценка кандидата', { index: 3 }),
    итогСобесед: attr('Итог собеседования', { index: 4 }),
    крКомИлиОбсРеш: attr('Краткий комментарий или обоснованное решение', { index: 5 })
  });
};
