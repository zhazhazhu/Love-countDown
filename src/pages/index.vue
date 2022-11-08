<script setup lang="ts">
const router = useRouter()
function add() {
  router.push({ name: 'add' })
}

const events = computed(() => {
  return loveEvents.value.map(item => ({
    event: item.event,
    date: new Date(`${item.date} ${item.time}`).getTime() - Date.now(),
  }))
})
</script>

<template>
  <div p="x-4 y-10">
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Love-Day-CountDown
      </a>
    </p>
    <p>
      <em text-sm op75>与你一起，共赴每一次期待</em>
    </p>

    <div class="mt-20px">
      <div v-for="item, i in events" :key="i" class="mb-10px">
        <div text-18px>
          {{ item.event }}
        </div>

        <van-count-down millisecond :time="item.date" format="HH:mm:ss:SS" />
      </div>
    </div>

    <nav text-xl fixed bottom-30px right-30px>
      <button icon-btn text-40px @click="add">
        <div i-material-symbols-add-circle />
      </button>
    </nav>
  </div>
</template>
