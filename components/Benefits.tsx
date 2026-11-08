import { PackageCheck, Palette, ShieldCheck } from "lucide-react";

export function Benefits() {
  return (
    <section className="benefits" aria-label="Beneficios">
      <div><Palette /><span><b>Elegí tus colores</b><small>Combinaciones a medida</small></span></div>
      <div><ShieldCheck /><span><b>Producción cuidada</b><small>Revisamos cada terminación</small></span></div>
      <div><PackageCheck /><span><b>Listo para regalar</b><small>Presentación que enamora</small></span></div>
    </section>
  );
}
