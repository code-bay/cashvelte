<script>
  import { Doughnut } from 'svelte-chartjs';

  export let data

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Doughnut {data} options={{ responsive: true }} />
