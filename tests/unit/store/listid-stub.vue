<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "Stub",
    computed: {
        ...mapState("listid", ["list", "route"]),
        ...mapGetters("listid", ["current_route"]),
    },
    methods: mapActions("listid", ["GET_list", "SET_listid"]),
    render: t => t("div"),
}
</script>
