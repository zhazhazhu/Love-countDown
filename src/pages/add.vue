<script lang='ts' setup>
import { Notify } from 'vant'
import 'vant/es/notify/style'

const form = reactive({
  event: '',
  date: '',
  time: '',
})

const currentTime = ref(['12', '00'])

const showPicker = ref(false)

const showPicker1 = ref(false)

const onConfirm = ({ selectedValues }: any) => {
  form.date = selectedValues.join('-')
  showPicker.value = false
}

const onConfirm1 = () => {
  form.time = currentTime.value.join(':')
  showPicker1.value = false
}

function onSubmit() {
  loveEvents.value?.push(form)
  Notify({ type: 'success', message: '创建成功' })
  history.back()
}

const formatter = (type: any, option: any) => {
  if (type === 'hour')
    option.text += '时'

  if (type === 'minute')
    option.text += '分'

  return option
}

const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar
    title="创建" left-text="返回"
    left-arrow class="mb-20px" @click-left="onClickLeft"
  />

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="form.event"
        name="期待日"
        label="期待日"
        placeholder="期待日"
        :rules="[{ required: true, message: '乖乖，是啥日子呢' }]"
      />
      <van-field
        v-model="form.date"
        is-link
        readonly
        name="datePicker"
        label="日期"
        placeholder="点击选择日期"
        @click="showPicker = true"
      />
      <van-field
        v-model="form.time"
        is-link
        readonly
        name="datePicker"
        label="时间"
        placeholder="点击选择时间"
        @click="showPicker1 = true"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="default" native-type="submit">
        创建
      </van-button>
    </div>
  </van-form>

  <van-popup v-model:show="showPicker" position="bottom" round>
    <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
  </van-popup>

  <van-popup v-model:show="showPicker1" position="bottom" round>
    <van-time-picker
      v-model="currentTime"
      title="选择时间"
      :formatter="formatter"
      @confirm="onConfirm1"
    />
  </van-popup>
</template>

<style scoped>

</style>
