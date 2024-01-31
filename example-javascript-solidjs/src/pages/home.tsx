import { Credit } from '../components/credit'

export default function Home() {
  return (
    <main class="container mx-auto flex flex-col gap-10">
      <h1 class="text-6xl">Home</h1>
      <section class="flex gap-10">
        <div>
          <img src="/images/photo-01.avif" />
          <Credit name="Nic Y-C" link="https://unsplash.com/@themcny" />
        </div>
        <div>
          <img src="/images/photo-02.avif" />
          <Credit name="Andrew Bui" link="https://unsplash.com/@andrewbui" />
        </div>
        <div>
          <img src="/images/photo-03.avif" />
          <Credit name="Roberto Nickson" link="https://unsplash.com/@rpnickson" />
        </div>
      </section>
    </main>
  )
}
