<figure key={photo.id} className="space-y-3">
  <div className="w-[65%] mx-auto aspect-square rounded-xl bg-card border border-border overflow-hidden relative">
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      className="object-cover"
    />
  </div>

  <figcaption className="text-sm text-muted-foreground text-center space-y-1">
    <strong className="block text-foreground">
      {photo.caption}
    </strong>

    {photo.note && (
      <span className="block">
        {photo.note}
      </span>
    )}
  </figcaption>
</figure>
