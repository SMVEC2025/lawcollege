import { university_classic_program_data } from "@/data/program-data";
import ProgramBreadcrumbs from "../components/ProgramBreadcrumbs";
import ProgramDetailsArea from "../components/ProgramDetailsArea";
type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props) {
  const id = params.id;
  const event = university_classic_program_data.find((item) => item.id == Number(id));
  return {
    title: event?.title,
  };
}

export default function EventDetailsPage({ params }: Props) {
  const event = university_classic_program_data.find((item) => item.id == Number(params.id));
  return (
    <main>
      {event ? (
        <>
        <ProgramBreadcrumbs event={event}/>
        <ProgramDetailsArea event={event}/>
         </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No Event found with id: {params.id}
        </div>
      )}
    </main>
  );
}
