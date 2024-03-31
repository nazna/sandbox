import { Credit } from '../components/credit'

export default function Error() {
  return (
    <main class="container mx-auto flex flex-col gap-10">
      <h1 class="text-6xl">Error</h1>
      <section class="flex gap-10">
        <div>
          <img src="/images/error-cat.jpg" />
          <Credit name="傅甬 华" link="https://unsplash.com/@hhh13" />
        </div>
      </section>
    </main>
  )
}
