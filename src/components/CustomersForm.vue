<template>
  <div class="customers-form">
		<form class="customers-form__form" @submit.prevent="submitHandler">

			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Фамилия*</span>
					<input
						class="customers-form__input input"
						:class="{'input--error': $v.form.lastName.$error}"
						type="text"
						placeholder="Введите вашу фамилию"
						v-model="form.lastName"
						@blur="$v.form.lastName.$touch()"
					>
					<span class="customers-form__error" v-if="$v.form.lastName.$dirty && !$v.form.lastName.required">Поле обязательно для заполнения</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Имя*</span>
					<input
						class="customers-form__input input"
						:class="{'input--error': $v.form.firstName.$error}"
						type="text"
						placeholder="Введите ваше имя"
						v-model="form.firstName"
						@blur="$v.form.firstName.$touch()"
					>
					<span class="customers-form__error" v-if="$v.form.firstName.$dirty && !$v.form.firstName.required">Поле обязательно для заполнения</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Отчество</span>
					<input
						class="customers-form__input input"
						type="text"
						placeholder="Введите ваше отчество"
						v-model="form.patronymic"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Дата рождения*</span>
					<input
						class="customers-form__input input input--type-date"
						:class="{'input--error': $v.form.birthday.$error}"
						type="date"
						v-model="form.birthday"
						@blur="$v.form.birthday.$touch()"
					>
					<span class="customers-form__error" v-if="$v.form.birthday.$dirty && !$v.form.birthday.required">Поле обязательно для заполнения</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Телефон*</span>
					<input
						class="customers-form__input input"
						type="tel" placeholder="Номер телефона"
						v-model="form.phoneNumber"
					>
					<span class="customers-form__error">Некорректный номер телефона</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Пол</span>
					<input
						class="customers-form__input input"
						type="text"
						placeholder="Укажите пол"
						v-model="form.gender"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Группа клиентов*</span>
					<select
						class="customers-form__input input"
						:class="{'input--error': $v.form.customersGroup.$error}"
						multiple
						v-model="form.customersGroup"
						@blur="$v.form.customersGroup.$touch()"
					>
						<option value="VIP">VIP</option>
						<option value="Проблемные">Проблемные</option>
						<option value="ОМС">ОМС</option>
					</select>
					<span
						class="customers-form__error"
						v-if="$v.form.customersGroup.$dirty && !$v.form.customersGroup.required"
					>Необходимо выбрать минимум 1</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Лечащий врач</span>
					<select class="customers-form__input input" v-model="form.doctor">
						<option value="Иванов">Иванов</option>
						<option value="Захаров">Захаров</option>
						<option value="Чернышева">Чернышева</option>
					</select>
				</label>

				<label class="customers-form__label">
					<input type="checkbox" v-model="form.shortMessageDisable">
					<span class="customers-form__title">Не отправлять СМС</span>
				</label>
			</div>


			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Индекс</span>
					<input
						class="customers-form__input input"
						type="text"
						placeholder="Введите почтовый индекс"
						v-model="form.postIndex"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Страна</span>
					<input
						class="customers-form__input input"
						type="tel"
						placeholder="Страна проживания"
						v-model="form.country"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Область</span>
					<input
						class="customers-form__input input"
						type="text"
						placeholder="Область/край в стране"
						v-model="form.region"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Город*</span>
					<input
						class="customers-form__input input"
						:class="{'input--error': $v.form.city.$error}"
						type="text"
						placeholder="Город проживания"
						v-model="form.city"
						@blur="$v.form.city.$touch()"
					>
					<span class="customers-form__error" v-if="$v.form.city.$dirty && !$v.form.city.required">Поле обязательно для заполнения</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Улица</span>
					<input
						class="customers-form__input input"
						type="tel"
						placeholder="Введина название улицы"
						v-model="form.street"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Дом</span>
					<input
						class="customers-form__input input"
						type="text"
						placeholder="Введите номер дома"
						v-model="form.houseNumber"
					>
				</label>
			</div>


			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Тип документа*</span>
					<select
						class="customers-form__input input"
						:class="{'input--error': $v.form.documentType.$error}"
						v-model="form.documentType"
						@blur="$v.form.documentType.$touch()"
					>
						<option value="Паспорт">Паспорт</option>
						<option value="Свидетельство о рождении">Свидетельство о рождении</option>
						<option value="Вод. удостоверение">Вод. удостоверение</option>
					</select>
					<span
						class="customers-form__error"
						v-if="$v.form.documentType.$dirty && !$v.form.documentType.required"
					>Вы не выбрали тип документа</span>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Серия</span>
					<input
						class="customers-form__input input"
						type="tel" placeholder="Серия документа"
						v-model="form.documentSeries"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Номер</span>
					<input
						class="customers-form__input input"
						type="text" placeholder="Номер документа"
						v-model="form.documentNumber"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Кем выдан</span>
					<input
						class="customers-form__input input"
						type="tel" placeholder="Кем выдан документ"
						v-model="form.documentIssuedBy"
					>
				</label>

				<label class="customers-form__label">
					<span class="customers-form__title">Дата выдачи*</span>
					<input
						class="customers-form__input input input--type-date"
						:class="{'input--error': $v.form.documentIssueDate.$error}"
						type="date"
						v-model="form.documentIssueDate"
						@blur="$v.form.documentIssueDate.$touch()"
					>
					<span
						class="customers-form__error"
						v-if="$v.form.documentIssueDate.$dirty && !$v.form.documentIssueDate.required"
					>Вы не выбрали дату выдачи</span>
				</label>
			</div>

			<span class="customers-form__title">* - поля обязательные для заполнения</span>
			<button class="customers-form__button button">Отправить</button>

		</form>
		<!-- <pre>{{ $v.form.customersGroup }}</pre> -->
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
	name: 'CustomersForm',
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				patronymic: '',
				birthday: '',
				phoneNumber: '',
				gender: '',
				customersGroup: [],
				doctor: '',
				shortMessageDisable: false,
				postIndex: '',
				country: '',
				region: '',
				city: '',
				street: '',
				houseNumber: '',
				documentType: '',
				documentSeries: '',
				documentNumber: '',
				documentIssuedBy: '',
				documentIssueDate: ''
			}
		}
	},
	validations: {
		form: {
			firstName: {
				required
			},
			lastName: {
				required
			},
			birthday: {
				required
			},
			phoneNumber: {
				required
			},
			customersGroup: {
				required
			},
			city: {
				required
			},
			documentType: {
				required
			},
			documentIssueDate: {
				required
			}
		}
	},
	methods: {
		submitHandler() {
			console.log('object');
		}
	}
}
</script>

<style lang="scss">
	.customers-form {
		max-width: 450px;
		margin: 0 auto;
		padding: 10px;
		box-shadow: 0 3px 10px rgba($color: #000000, $alpha: 0.2);
		&__group {
			display: flex;
			align-items: flex-start;
			flex-wrap: wrap;
			padding: 10px 0;
			margin-bottom: 10px;
			border-bottom: 2px solid rgba($color: #22b2ea, $alpha: 0.5);
		}
		&__label {
			position: relative;
			display: block;
			max-width: 50%;
			flex-basis: 50%;
			padding: 0 5px;
			margin: 0 0 15px;
			box-sizing: border-box;
		}
		&__title {
			display: inline-block;
			margin-bottom: 5px;
			font-size: 12px;
			color: #008dc5;
		}
		&__error {
			position: absolute;
			z-index: 99;
			top: 100%;
			left: 5px;
			right: 5px;
			display: block;
			padding: 2px 5px;
			color: #fff;
			font-size: 12px;
			background-color: #ff5e7b;
			transform: translateY(-2px);
			box-sizing: border-box;
		}
		&__input {
			width: 100%;
			box-sizing: border-box;
		}
		&__button {
			display: block;
		}
	}
</style>
