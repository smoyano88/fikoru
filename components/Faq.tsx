import { ChevronDown } from "lucide-react";

const questions = [
  ["¿Puedo pedir otros colores?", "Sí. Combinamos colores según disponibilidad y te mostramos la propuesta antes de imprimir."],
  ["¿La litofanía lleva mi propia foto?", "Sí. Revisamos la imagen, la adaptamos y te enviamos una vista previa antes de producirla."],
  ["¿Hacen diseños personalizados?", "Sí. Trabajamos nombres, logos, mascotas, regalos y pequeñas series para negocios."],
  ["¿Cómo se entrega?", "Coordinamos retiro o envío. La dirección y las zonas de entrega se completarán antes de abrir la tienda."],
];

export function Faq() {
  return (
    <section className="section faq" id="preguntas">
      <div>
        <span className="eyebrow">Antes de pedir</span>
        <h2>Preguntas frecuentes</h2>
        <p>Si tu idea no aparece acá, escribinos. Lo interesante de imprimir en 3D es que casi todo se puede adaptar.</p>
      </div>
      <div className="faqList">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<ChevronDown /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
