<template>
  <div class="customers-form">
		<form class="customers-form__form">

			<div class="customers-form__group">
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Фамилия">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Имя">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Отчество">
				</label>
			</div>

			<div class="customers-form__group">
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Дата рождения">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="tel" placeholder="Номер телефона">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Пол">
				</label>
			</div>

			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Группа клиентов</span>
					<select name="" multiple>
						<option value="VIP">VIP</option>
						<option value="Проблемные">Проблемные</option>
						<option value="ОМС">ОМС</option>
					</select>
				</label>
				<label class="customers-form__label">
					<span class="customers-form__title">Лечащий врач</span>
					<select name="">
						<option value="Иванов">Иванов</option>
						<option value="Захаров">Захаров</option>
						<option value="Чернышева">Чернышева</option>
					</select>
				</label>
				<label class="customers-form__label">
					<input type="checkbox" name="">
					<span class="customers-form__title">Не отправлять СМС</span>
				</label>
			</div>


			<div class="customers-form__group">
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Индекс">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="tel" placeholder="Страна">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Область">
				</label>
			</div>

			<div class="customers-form__group">
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Город">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="tel" placeholder="Улица">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Дом">
				</label>
			</div>


			<div class="customers-form__group">
				<label class="customers-form__label">
					<span class="customers-form__title">Тип документа</span>
					<select name="">
						<option value="Паспорт">Паспорт</option>
						<option value="Свидетельство о рождении">Свидетельство о рождении</option>
						<option value="Вод. удостоверение">Вод. удостоверение</option>
					</select>
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="tel" placeholder="Серия">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Номер">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="tel" placeholder="Кем выдан">
				</label>
				<label class="customers-form__label">
					<input class="customers-form__input" type="text" placeholder="Дата выдачи">
				</label>
			</div>

		</form>
  </div>
</template>

<script>
export default {
  name: 'CustomersForm'
}
</script>

<style lang="scss">
	.customers-form {
		max-width: 450px;
		margin: 0 auto;
		padding: 10px;
		box-shadow: 0 0 7px rgba($color: #000000, $alpha: 0.2);
		&__group {
			display: flex;
			flex-wrap: wrap;
		}
		&__label {
			display: block;
			max-width: 33.3333%;
			flex-basis: 33.3333%;
			padding: 0 5px;
			margin: 0 0 10px;
			box-sizing: border-box;
		}
		&__title {
			font-size: 12px;
		}
		&__input {
			width: 100%;
			box-sizing: border-box;
		}
	}
</style>
