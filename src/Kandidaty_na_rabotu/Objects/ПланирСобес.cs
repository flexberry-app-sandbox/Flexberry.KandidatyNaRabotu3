﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kandidaty_na_rabotu
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Планир собес.
    /// </summary>
    // *** Start programmer edit section *** (ПланирСобес CustomAttributes)

    // *** End programmer edit section *** (ПланирСобес CustomAttributes)
    [AutoAltered()]
    [Caption("Планирование собеседования")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПланирСобесE", new string[] {
            "ДатаПланСобес as \'Дата планирования собеседования\'",
            "Кабинет as \'Номер кабинета проведения собеседования\'",
            "Этаж as \'Этаж\'",
            "Время as \'Время собеседования\'",
            "РегистАнкеты as \'ФИО кандидата\'",
            "РегистАнкеты.ФИОКандид as \'ФИО кандидата\'",
            "РегистАнкеты.ВакантДолжн.Должность as \'Вакантная должность\'",
            "ИметьПриСебе as \'Иметь при себе\'",
            "РегистАнкеты.НомерТелефона as \'Номер телефона кандидата\'",
            "РегистАнкеты.ЭлПочта as \'Электронная почта\'",
            "Организация as \'Наименование организации\'",
            "Организация.Наименование as \'Наименование организации\'",
            "РегистАнкеты.Организация.Адрес as \'Адрес организации\'",
            "РегистАнкеты.Организация.ТелОрганиз as \'Телефон организации\'"}, Hidden=new string[] {
            "РегистАнкеты.ФИОКандид",
            "Организация.Наименование"})]
    [MasterViewDefineAttribute("ПланирСобесE", "РегистАнкеты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОКандид")]
    [MasterViewDefineAttribute("ПланирСобесE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ПланирСобесL", new string[] {
            "ДатаПланСобес as \'Дата планирования собеседования\'",
            "Время as \'Время собеседования\'",
            "Кабинет as \'Номер кабинета проведения собеседования\'",
            "Этаж as \'Этаж\'",
            "РегистАнкеты.ФИОКандид as \'ФИО кандидата\'",
            "РегистАнкеты.ВакантДолжн.Должность as \'Вакантная должность\'",
            "ИметьПриСебе as \'Иметь при себе\'",
            "РегистАнкеты.НомерТелефона as \'Номер телефона кандидата\'",
            "РегистАнкеты.ЭлПочта as \'Электронная почта\'",
            "Организация.Наименование as \'Наименование организации\'",
            "РегистАнкеты.Организация.Адрес as \'Адрес организации\'",
            "РегистАнкеты.Организация.ТелОрганиз as \'Телефон организации\'"})]
    public class ПланирСобес : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаПланСобес;
        
        private string fИметьПриСебе;
        
        private string fВремя;
        
        private int fКабинет;
        
        private int fЭтаж;
        
        private IIS.Kandidaty_na_rabotu.Организация fОрганизация;
        
        private IIS.Kandidaty_na_rabotu.РегистАнкеты fРегистАнкеты;
        
        // *** Start programmer edit section *** (ПланирСобес CustomMembers)

        // *** End programmer edit section *** (ПланирСобес CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.Время CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.Время Get start)

                // *** End programmer edit section *** (ПланирСобес.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (ПланирСобес.Время Get end)

                // *** End programmer edit section *** (ПланирСобес.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.Время Set start)

                // *** End programmer edit section *** (ПланирСобес.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (ПланирСобес.Время Set end)

                // *** End programmer edit section *** (ПланирСобес.Время Set end)
            }
        }
        
        /// <summary>
        /// ДатаПланСобес.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.ДатаПланСобес CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.ДатаПланСобес CustomAttributes)
        public virtual System.DateTime ДатаПланСобес
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.ДатаПланСобес Get start)

                // *** End programmer edit section *** (ПланирСобес.ДатаПланСобес Get start)
                System.DateTime result = this.fДатаПланСобес;
                // *** Start programmer edit section *** (ПланирСобес.ДатаПланСобес Get end)

                // *** End programmer edit section *** (ПланирСобес.ДатаПланСобес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.ДатаПланСобес Set start)

                // *** End programmer edit section *** (ПланирСобес.ДатаПланСобес Set start)
                this.fДатаПланСобес = value;
                // *** Start programmer edit section *** (ПланирСобес.ДатаПланСобес Set end)

                // *** End programmer edit section *** (ПланирСобес.ДатаПланСобес Set end)
            }
        }
        
        /// <summary>
        /// ИметьПриСебе.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.ИметьПриСебе CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.ИметьПриСебе CustomAttributes)
        [StrLen(255)]
        public virtual string ИметьПриСебе
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.ИметьПриСебе Get start)

                // *** End programmer edit section *** (ПланирСобес.ИметьПриСебе Get start)
                string result = this.fИметьПриСебе;
                // *** Start programmer edit section *** (ПланирСобес.ИметьПриСебе Get end)

                // *** End programmer edit section *** (ПланирСобес.ИметьПриСебе Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.ИметьПриСебе Set start)

                // *** End programmer edit section *** (ПланирСобес.ИметьПриСебе Set start)
                this.fИметьПриСебе = value;
                // *** Start programmer edit section *** (ПланирСобес.ИметьПриСебе Set end)

                // *** End programmer edit section *** (ПланирСобес.ИметьПриСебе Set end)
            }
        }
        
        /// <summary>
        /// Кабинет.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.Кабинет CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.Кабинет CustomAttributes)
        public virtual int Кабинет
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.Кабинет Get start)

                // *** End programmer edit section *** (ПланирСобес.Кабинет Get start)
                int result = this.fКабинет;
                // *** Start programmer edit section *** (ПланирСобес.Кабинет Get end)

                // *** End programmer edit section *** (ПланирСобес.Кабинет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.Кабинет Set start)

                // *** End programmer edit section *** (ПланирСобес.Кабинет Set start)
                this.fКабинет = value;
                // *** Start programmer edit section *** (ПланирСобес.Кабинет Set end)

                // *** End programmer edit section *** (ПланирСобес.Кабинет Set end)
            }
        }
        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.Этаж CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.Этаж CustomAttributes)
        public virtual int Этаж
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.Этаж Get start)

                // *** End programmer edit section *** (ПланирСобес.Этаж Get start)
                int result = this.fЭтаж;
                // *** Start programmer edit section *** (ПланирСобес.Этаж Get end)

                // *** End programmer edit section *** (ПланирСобес.Этаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.Этаж Set start)

                // *** End programmer edit section *** (ПланирСобес.Этаж Set start)
                this.fЭтаж = value;
                // *** Start programmer edit section *** (ПланирСобес.Этаж Set end)

                // *** End programmer edit section *** (ПланирСобес.Этаж Set end)
            }
        }
        
        /// <summary>
        /// Планир собес.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.Организация CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Kandidaty_na_rabotu.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.Организация Get start)

                // *** End programmer edit section *** (ПланирСобес.Организация Get start)
                IIS.Kandidaty_na_rabotu.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ПланирСобес.Организация Get end)

                // *** End programmer edit section *** (ПланирСобес.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.Организация Set start)

                // *** End programmer edit section *** (ПланирСобес.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ПланирСобес.Организация Set end)

                // *** End programmer edit section *** (ПланирСобес.Организация Set end)
            }
        }
        
        /// <summary>
        /// Планир собес.
        /// </summary>
        // *** Start programmer edit section *** (ПланирСобес.РегистАнкеты CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.РегистАнкеты CustomAttributes)
        [PropertyStorage(new string[] {
                "РегистАнкеты"})]
        [NotNull()]
        public virtual IIS.Kandidaty_na_rabotu.РегистАнкеты РегистАнкеты
        {
            get
            {
                // *** Start programmer edit section *** (ПланирСобес.РегистАнкеты Get start)

                // *** End programmer edit section *** (ПланирСобес.РегистАнкеты Get start)
                IIS.Kandidaty_na_rabotu.РегистАнкеты result = this.fРегистАнкеты;
                // *** Start programmer edit section *** (ПланирСобес.РегистАнкеты Get end)

                // *** End programmer edit section *** (ПланирСобес.РегистАнкеты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланирСобес.РегистАнкеты Set start)

                // *** End programmer edit section *** (ПланирСобес.РегистАнкеты Set start)
                this.fРегистАнкеты = value;
                // *** Start programmer edit section *** (ПланирСобес.РегистАнкеты Set end)

                // *** End programmer edit section *** (ПланирСобес.РегистАнкеты Set end)
            }
        }
        
        // *** Start programmer edit section *** (ПланирСобес.Отправить CustomAttributes)

        // *** End programmer edit section *** (ПланирСобес.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (ПланирСобес.Отправить method implementation)

            return;
            // *** End programmer edit section *** (ПланирСобес.Отправить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПланирСобесE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланирСобесE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланирСобесE", typeof(IIS.Kandidaty_na_rabotu.ПланирСобес));
                }
            }
            
            /// <summary>
            /// "ПланирСобесL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланирСобесL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланирСобесL", typeof(IIS.Kandidaty_na_rabotu.ПланирСобес));
                }
            }
        }
    }
}
