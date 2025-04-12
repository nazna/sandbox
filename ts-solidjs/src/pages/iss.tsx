import { createResource, createSignal } from 'solid-js'
import { fetchISSCurrentLocation } from '../api/iss'

export default function Iss() {
  const [clicked, setClicked] = createSignal<boolean>(false)
  const [location] = createResource<ISSCurrentLocation, boolean>(clicked, fetchISSCurrentLocation)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <main class="container mx-auto flex flex-col gap-10">
      <h1 class="text-6xl">Iss</h1>
      <section class="flex flex-col gap-10">
        <button
          class="w-24 py-2 rounded font-bold text-white bg-dark-400 hover:bg-dark-300"
          onClick={handleClick}
          disabled={clicked()}
        >
          GET
        </button>
        <pre>{JSON.stringify(location(), null, 2)}</pre>
      </section>
    </main>
  )
}
