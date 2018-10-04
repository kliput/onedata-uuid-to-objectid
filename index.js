// %%--------------------------------------------------------------------
// %% @doc Build an object ID given an enterprise number and data as a
// %% binary. We ensure here that the Data is not more than 32 bytes. The
// %% object ID is composed of a number of fields:
// %%
// %% +----------+------------+-----------+--------+-------+-----------+
// %% |     0    | 1 | 2 | 3  |     4     |   5    | 6 | 7 | 8 |..| 39 |
// %% +----------+------------+-----------+--------+-------+-----------+
// %% | Reserved | Enterprise | Reserverd | Length |  CRC  | Opaque    |
// %% | (zero)   | Number     | (zero)    |        |       | Data      |
// %% +----------+------------+-----------+--------+-------+-----------+
// %% @end
// %%--------------------------------------------------------------------
// -spec build_objectid(Enum :: integer(), Data :: binary()) -> binary() | {error, atom()}.
// build_objectid(Enum, Data) when is_binary(Data) ->
//     Length = size(Data),
//     case (Length =< 320) of
//         true ->
//             Bin = <<0:8, Enum:24, 0:8, Length:8, 0:16, Data/binary>>,
//             Crc = crc16(binary_to_list(Bin)),
//             <<0:8, Enum:24, 0:8, Length:8, Crc:16, Data/binary>>;
//         false ->
//             {error, badarg}
//     end.

const buildObjectId = require('./build-object-id');

const example = 'Z3VpZCNkMTRlNDgyMWRmOGM2YWFiMjM2MWY0ZTQwZTdkZjA4MCNzcGFjZTE';

console.log(buildObjectId(example));

console.log('000002cd73e6775696423643134653438323164663863366161623233363166346534306537646630383023737061636531')