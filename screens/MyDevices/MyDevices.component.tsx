import { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem, IconButton } from "@react-native-material/core";
import { createAPIEndpoint, ENDPOINTS } from "../../services/api.service";
import * as SecureStore from "expo-secure-store";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import MyDevicesStyles from "./MyDevices.styles";

interface AssetRequest {
  asset_id: "string";
  employee_id: "string";
  id: "string";
  remarks: "string";
  status: "string";
}

const MyDevices: React.FC = ({ navigation }: any) => {
  const [assetRequests, setAssetRequests] = useState([] as AssetRequest[]);

  const getAssetRequests = async () => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      const response = await createAPIEndpoint(ENDPOINTS.ASSETREQUEST).fetchAll(
        token
      );
      setAssetRequests(response.data.data);
    }
  };

  useEffect(() => {
    getAssetRequests();

    const willRefetchOnFocus = navigation.addListener("focus", () => {
      getAssetRequests();
    });

    return willRefetchOnFocus;
  }, []);

  const handleSubmit = async (id: string) => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      createAPIEndpoint(ENDPOINTS.DELETEASSETREQUEST)
        .delete(id, token)
        .then(() => {
          getAssetRequests();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <View>
      {assetRequests.map((assetRequest) => (
        <ListItem
          key={Math.random()}
          title={`Serial: ${assetRequest.asset_id}`}
          secondaryText={`Remarks: ${assetRequest.remarks}`}
          trailing={
            assetRequest.status.toLowerCase() === "pending"
              ? () => (
                  <IconButton
                    icon={(props) => (
                      <Icon
                        name="delete"
                        {...props}
                        style={MyDevicesStyles.icon}
                      />
                    )}
                    onPress={() => handleSubmit(assetRequest.id)}
                  />
                )
              : null
          }
        />
      ))}
    </View>
  );
};

export default MyDevices;
