import { defineComponent } from "vue";
import style  from "./index.module.less";
import Test from "@/components/Test/index.vue";
import Test2 from "@/components/Test2";
import { useUserStore } from "@/store";
export default defineComponent({
    setup(props) {
        const store = useUserStore()

        const handleChangeName = () => {
            store.setUserInfo('vue3.0', 20)
        }

        return () => (
            <div>
               {store.userInfo.name}
               <button onClick={handleChangeName}>修改名称</button>
            </div>
        )
    }
});