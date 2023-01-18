import { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem } from "@react-native-material/core";
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
  }, [assetRequests]);

  const handleSubmit = async (id: string) => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      const response = await createAPIEndpoint(ENDPOINTS.DELETEASSETREQUEST)
        .delete(id, token)
        .then(() => {
          navigation.back();
          navigation.back();
          navigation.navigate("Product List");
          navigation.navigate("My Devices");
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
          trailing={(props) => (
            <Icon
              name="delete"
              {...props}
              onPress={() => handleSubmit(assetRequest.id)}
              style={MyDevicesStyles.icon}
            />
          )}
        />
      ))}
    </View>
  );
};

export default MyDevices;
