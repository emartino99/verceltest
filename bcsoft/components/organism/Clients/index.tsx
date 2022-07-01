
import { useClientsHook } from '../../../services';

export function Clients() {

    const { 
        clients,
        error
    } = useClientsHook();

    console.log()

  return (

    <section>
        <h1>ciao mabre</h1>
    </section>

  );
};