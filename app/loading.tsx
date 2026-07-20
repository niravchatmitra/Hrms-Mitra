export default function Loading() {
  return (
    <section className="section min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block">
          <div className="w-16 h-16 border-4 border-primary-light border-t-primary rounded-full animate-spin" />
        </div>
        <p className="mt-4 text-text-muted">Loading...</p>
      </div>
    </section>
  )
}
