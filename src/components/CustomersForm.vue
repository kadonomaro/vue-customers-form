<template>
  <div class="customers-form">
		<form class="customers-form__form" @submit.prevent="submitHandler">

			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Фамилия*</span>
					<input class="customers-form__input input" type="text" placeholder="Введите вашу фамилию" v-model="form.lastName">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Имя*</span>
					<input class="customers-form__input input" type="text" placeholder="Введите ваше имя" v-model="form.firstName">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Отчество</span>
					<input class="customers-form__input input" type="text" placeholder="Введите ваше отчество" v-model="form.patronymic">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Дата рождения*</span>
					<input class="customers-form__input input input--type-date" type="date" v-model="form.birthday">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Телефон*</span>
					<input class="customers-form__input input" type="tel" placeholder="Номер телефона" v-model="form.phoneNumber">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Пол</span>
					<input class="customers-form__input input" type="text" placeholder="Укажите пол" v-model="form.gender">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Группа клиентов*</span>
					<select class="customers-form__input input" multiple v-model="form.customersGroup">
						<option value="VIP">VIP</option>
						<option value="Проблемные">Проблемные</option>
						<option value="ОМС">ОМС</option>
					</select>
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
					<input class="customers-form__input input" type="text" placeholder="Введите почтовый индекс" v-model="form.postIndex">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Страна</span>
					<input class="customers-form__input input" type="tel" placeholder="Страна проживания" v-model="form.country">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Область</span>
					<input class="customers-form__input input" type="text" placeholder="Область/край в стране" v-model="form.region">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Город*</span>
					<input class="customers-form__input input" type="text" placeholder="Город проживания" v-model="form.city">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Улица</span>
					<input class="customers-form__input input" type="tel" placeholder="Введина название улицы" v-model="form.street">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Дом</span>
					<input class="customers-form__input input" type="text" placeholder="Введите номер дома" v-model="form.houseNumber">
				</label>
			</div>

			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Тип документа*</span>
					<select class="customers-form__input input" name="" v-model="form.documentType">
						<option value="Паспорт">Паспорт</option>
						<option value="Свидетельство о рождении">Свидетельство о рождении</option>
						<option value="Вод. удостоверение">Вод. удостоверение</option>
					</select>
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Серия</span>
					<input class="customers-form__input input" type="tel" placeholder="Серия документа" v-model="form.documentSeries">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Номер</span>
					<input class="customers-form__input input" type="text" placeholder="Номер документа" v-model="form.documentNumber">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Кем выдан</span>
					<input class="customers-form__input input" type="tel" placeholder="Кем выдан документ" v-model="form.documentIssuedBy">
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Дата выдачи*</span>
					<input class="customers-form__input input input--type-date" type="date" v-model="form.documentIssueDate">
				</label>
			</div>

			<span class="customers-form__title">* - поля обязательные для заполнения</span>
			<button class="customers-form__button button">Отправить</button>

		</form>
  </div>
</template>

<script>
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
	methods: {
		submitHandler() {
			console.log(this.form);
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
			&:not(:last-child) {
				border-bottom: 2px solid rgba($color: #22b2ea, $alpha: 0.5);
			}
		}
		&__label {
			display: block;
			max-width: 50%;
			flex-basis: 50%;
			padding: 0 5px;
			margin: 0 0 10px;
			box-sizing: border-box;
		}
		&__label--full-size {
			max-width: 100%;
			flex-basis: 100%;
		}
		&__title {
			display: inline-block;
			margin-bottom: 5px;
			font-size: 12px;
			color: #008dc5;
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
