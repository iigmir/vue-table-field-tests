<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "Stub",
    computed: {
        ...mapState("listid", ["list", "route"]),
    },
    methods: mapActions("listid", ["GET_list", "SET_listid"]),
    render: t => t("div"),
}
</script>
